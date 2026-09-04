# HI2026 コース3 講習会サイト

ヒューマンインタフェースシンポジウム2026の講習会コース3「LLM活用入門から応用まで：プロンプト設計・LoRA・RAG」の案内・教材アーカイブサイトです。

## 仕様と運用ドキュメント

- [サイト仕様](docs/specification.md)
- [掲載情報インベントリ](docs/content-inventory.md)
- [仕様判断ログ](docs/decisions.md)
- [更新・再開ガイド](docs/maintenance.md)

新しい会話で作業を再開するときは、まず上記ドキュメントを確認してください。

## Project Structure

Inside of this Astro project, you'll find:

```text
/
├── docs/
├── public/
├── src/
│   ├── data/
│   │   └── course.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Learn more

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
