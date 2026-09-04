export type CourseResource = {
	label: string;
	description: string;
	url: string;
	kind: 'colab' | 'pdf';
	external?: boolean;
};

export type Instructor = {
	name: string;
	romanizedName: string;
	affiliation: string;
	expertise: string;
	bio: string;
	homepage?: string;
};

export const course = {
	code: 'HI2026 / COURSE 03',
	eventName: 'ヒューマンインタフェースシンポジウム2026',
	title: 'LLM活用入門から応用まで：プロンプト設計・LoRA・RAG',
	description:
		'大規模言語モデルの基礎から、プロンプト設計、RAG、LoRAによるファインチューニングまでを、理論と演習を通して学ぶ講習会です。',
	date: '2026年9月16日（水）',
	time: '15:15–16:45',
	venue: '岡山大学 津島キャンパス',
	primaryResourceUrl:
		'https://colab.research.google.com/drive/1XdL-mBGYtATHcvzvMvYze8zDf2mhveXD?usp=sharing',
	eventUrl: 'https://jp.his.gr.jp/symposium/symposium2026/',
	scheduleUrl: 'https://jp.his.gr.jp/symposium/hi2026-schedule/',
	lecturesUrl: 'https://jp.his.gr.jp/symposium/hi2026-lectures/',
	audience: ['LLMを研究・実務に活用したい方', '情報検索や機械学習に関心のある方', '手を動かしながら理解したい方'],
	agenda: [
		{
			label: '01',
			title: 'Introduction',
			detail: 'LLMの基本と、生成・要約・質問応答などの活用例を俯瞰します。',
		},
		{
			label: '02',
			title: 'プロンプト設計',
			detail: 'Zero-shot、Few-shot、Chain of Thought、ReActなどの考え方を扱います。',
		},
		{
			label: '03',
			title: 'RAG',
			detail: '外部の知識を検索して回答に活用する仕組みを、演習で学びます。',
		},
		{
			label: '04',
			title: 'LoRA',
			detail: '少ない計算資源でモデルを適応させるファインチューニングを紹介します。',
		},
		{
			label: '05',
			title: 'まとめ',
			detail: '自分のデータやタスクに合わせてLLMを活用するための視点を整理します。',
		},
	],
	resources: [
		{
			kind: 'colab',
			label: 'RAG演習用Colab',
			description: '検索拡張生成の仕組みを、ノートブックで手を動かしながら確認します。',
			url: 'https://colab.research.google.com/drive/1XdL-mBGYtATHcvzvMvYze8zDf2mhveXD?usp=sharing',
			external: true,
		},
		{
			kind: 'pdf',
			label: '講義資料（PDF）',
			description: 'コース3の講義スライドをダウンロードできます。',
			url: 'materials/hi2026-course3-slides.pdf',
		},
	] satisfies CourseResource[],
	instructors: [
		{
			name: '三林 亮太',
			romanizedName: 'Ryota Mibayashi',
			affiliation: '神戸大学',
			expertise: '自然言語処理・情報検索・音楽情報処理',
			bio: '自然言語処理と大規模言語モデルを対象に、日本語の理解や生成に関する研究に取り組んでいます。',
		},
		{
			name: 'ファム フーロン',
			romanizedName: 'Huu-Long Pham',
			affiliation: '筑波大学 図書館情報メディア系',
			expertise: '情報検索・機械学習',
			bio: '情報検索と機械学習を専門に、検索技術と大規模言語モデルの活用に関する研究に取り組んでいます。',
			homepage: 'https://longpham28.github.io/',
		},
	] satisfies Instructor[],
};
