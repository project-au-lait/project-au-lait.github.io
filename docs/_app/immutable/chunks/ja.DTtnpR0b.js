const e = 'システム開発のほろ苦さをまろやかに',
  a =
    'Project Au Laitはシステム開発に役立つツールを開発しています。システム開発に携わるエンジニアの作業を自動化・効率化することで、システムの品質向上に寄与することを目指しています。ツールはOSSとして開発していて、Apache License 2.0で公開しています。',
  r = {
    'Batch Translator': {
      description:
        'Batch Translator はテキストファイルを翻訳する CLI ツールです。想定する主な利用者は、README やドキュメントを翻訳する必要のある OSS 開発プロジェクトメンバーです。想定する主な用途は以下のようなものです。<br/><br/>・1 つのファイルの翻訳 (README.md など)<br/>・ディレクトリ以下の特定の拡張子を持ったファイルの一括翻訳 (AsciiDoctorを使ったドキュメントなど)',
      usage: 'Batch Translator は Java コマンド、または Maven Plugin として実行します。',
    },
    'JPA Entity Generator': {
      description:
        'JPA Entity Generator は、DB のテーブル定義を読み取り、それをもとに JPA の Entity クラスの java ファイルを生成するツールです。',
      usage: 'JPA Entity Generator は Java コマンド、または Maven Plugin として実行します。',
    },
    'Dev Servers': {
      description:
        'Dev Servers は、CI / CD 用のサーバー ツールをセットアップするための Docker Compose アセットです。 Docker を使用して次のツールをセットアップし、すぐに使用できるようにします。',
      usage: 'Dev ServersはDocker Composeとして実行します。',
    },
    'CSV Loader': {
      description:
        'CSV LoaderはCSVファイルをDBにロードするツールです。CSV Loaderのv0.8時点での用途はFlywayのJava-based Migrationに特化しています。次バージョン移行でjar単独実行、Maven Plugin等のサポートを予定しています。',
      usage: 'CSV LoaderはFlyway経由でJavaライブラリとして使用します。',
    },
  },
  t = 'Project Au Laitは株式会社モノクレアが開発、運営しています。',
  o = { catchphrase: e, description: a, products: r, operatedBy: t };
export { e as catchphrase, o as default, a as description, t as operatedBy, r as products };
