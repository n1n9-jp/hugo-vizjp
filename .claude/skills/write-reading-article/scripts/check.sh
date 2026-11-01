#!/usr/bin/env bash
# 読み物記事の分量と体裁を数える。
# 使い方: bash .claude/skills/write-reading-article/scripts/check.sh content/post/<slug>/index.md
set -euo pipefail
export LC_ALL=C.UTF-8

f="${1:?記事ファイルのパスを指定してください}"
[ -f "$f" ] || { echo "ファイルがありません: $f" >&2; exit 2; }

# front matter（+++ で囲まれた部分）
fm=$(awk '/^\+\+\+$/{c++; next} c==1' "$f")
# 本文（front matter の後ろ、「## 参考」の節より前）
body=$(awk '/^\+\+\+$/{c++; next} c>=2' "$f" | awk '/^## 参考/{exit} {print}')
# 参考・出典の節
refs=$(awk '/^\+\+\+$/{c++; next} c>=2' "$f" | awk '/^## 参考/{p=1} p')

chars=$(printf '%s' "$body" | tr -d '\n' | wc -m | tr -d ' ')
h2=$(printf '%s\n' "$body" | grep -c '^## ' || true)
ref_urls=$(printf '%s\n' "$refs" | grep -oE 'https?://|doi:' | wc -l | tr -d ' ')
empty_alt=$(grep -cE '!\[\]\(' "$f" || true)
desc=$(printf '%s\n' "$fm" | sed -n 's/^description *= *"\(.*\)"$/\1/p')
author=$(printf '%s\n' "$fm" | sed -n 's/^author *= *"\(.*\)"$/\1/p')
desc_chars=$(printf '%s' "$desc" | wc -m | tr -d ' ')
more=$(grep -c '^<!--more-->' "$f" || true)

ok=0
row() { # 項目 値 判定
  printf '%s: %s … %s\n' "$1" "$2" "$3"
  [ "$3" = "OK" ] || ok=1
}
judge() { if eval "$1"; then echo OK; else echo "要調整（$2）"; fi; }

echo "$f"
row "本文字数（出典を除く）" "$chars" "$(judge '[ "$chars" -ge 4000 ] && [ "$chars" -le 7000 ]' '4,000〜7,000字')"
row "h2（出典を除く）" "$h2" "$(judge '[ "$h2" -ge 4 ] && [ "$h2" -le 6 ]' '参考・出典を含めて5〜7個')"
row "出典の URL/DOI" "$ref_urls" "$(judge '[ "$ref_urls" -ge 1 ]' '1件以上')"
row "空の alt" "$empty_alt" "$(judge '[ "$empty_alt" -eq 0 ]' '0件')"
row "description" "${desc_chars}字" "$(judge '[ -n "$desc" ]' '結論を1〜2文')"
row "author" "${author:-なし}" "$(judge '[ "$author" = "矢崎裕一" ]' '矢崎裕一')"
row "<!--more-->" "$more" "$(judge '[ "$more" -eq 1 ]' '1か所')"
exit "$ok"
