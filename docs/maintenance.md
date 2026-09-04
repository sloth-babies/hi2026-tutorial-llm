# 更新・再開ガイド

更新日: 2026-09-04

## 新しい会話で再開するとき

次の順番で確認する。

1. `README.md`
2. `docs/specification.md`
3. `docs/content-inventory.md`
4. `docs/decisions.md`
5. `docs/maintenance.md`
6. `git status --short`

実装前に、未確定事項が今回の作業範囲に影響するかを確認する。影響しない場合は、仮データを作らず、確定済み情報だけで進める。

## 情報を更新する場所

ページに直接文章を散在させず、更新頻度の高い情報は `src/data/course.ts` に集約する。

### 追加演習リンク

- 演習名
- 短い説明
- URL
- 公開状態（公開前・公開済み）
- 必要なら対象パート（RAG、LoRAなど）

URLが未確定の場合は、カードやボタンを表示せず、プレースホルダーURLもコミットしない。

### 資料PDF

現在の公開ファイルは `public/materials/hi2026-course3-slides.pdf`。

新しい資料に差し替える場合:

1. `public/materials/` に公開用ファイルを配置する
2. `src/data/course.ts` の資料URLを更新する
3. ブラウザまたは生成物でリンクが開くことを確認する
4. `npm run build` を実行する

### 講師プロフィール

- 公式ページまたは本人から提供された内容を優先する
- 外部プロフィールを転載しすぎず、短い紹介に要約する
- ホームページURLの誤記を避ける
- 写真を追加する場合は、公開許諾済みの素材だけを使用する

## 開催前から開催後への更新

- ファーストビューのCTA文言を必要に応じて変更する
- 「開催前」「開催後」の状態表示を更新する
- 追加済みの演習・資料リンクを確認する
- 公式サイト側の情報と日時・会場に不整合がないか確認する

## 確認コマンド

```sh
npm run build
git diff --check
```

必要に応じて、Astroの開発サーバーを背景実行する。

```sh
astro dev --background
astro dev status
astro dev logs
astro dev stop
```

この環境で `astro` コマンドが直接見つからない場合は、プロジェクトのローカルバイナリを使う。

```sh
npx astro dev --host 127.0.0.1
```

## 現在の実装ファイル

- `src/pages/index.astro`: ページ構造
- `src/layouts/BaseLayout.astro`: HTMLメタデータと共通レイアウト
- `src/data/course.ts`: コース、演習、資料、講師の更新用データ
- `src/styles/global.css`: デザイン tokens、レイアウト、レスポンシブCSS
- `public/materials/hi2026-course3-slides.pdf`: 講義資料

## コミット方針

コミットは1つの目的に絞り、Conventional Commits風のsemanticなメッセージを使う。

例:

- `docs: define course website specification`
- `feat: add course landing page`
- `feat: add course resource links`
- `style: refine course page typography`
- `fix: correct workshop resource URL`
- `docs: record post-event archive workflow`

仕様変更と実装変更を同じコミットに混ぜない。URL追加だけの変更も、独立した小さなコミットにする。
