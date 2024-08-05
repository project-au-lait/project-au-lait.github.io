const e = 'Make the bittersweetness of system development milder',
  a =
    'We aim to contribute to improving system quality by automating and streamlining the work of engineers involved in system development. The tool is developed as OSS and released under Apache License 2.0.',
  t = {
    'Batch Translator': {
      description:
        'Batch Translator is a CLI tool for translating text files. The main intended users are OSS development project members who need to translate READMEs and documents. The main expected uses are as follows.<br/><br/> - Translating a single file (e.g. README.md)<br/> - Batch translation of files with specific extensions under a directory (documents using AsciiDoctor, etc.)',
      usage: 'Batch Translator runs as a Java command or as a Maven Plugin.',
    },
    'JPA Entity Generator': {
      description:
        'JPA Entity Generator is a tool that reads a DB table definition and generates a JPA Entity class java file based on it.',
      usage: 'JPA Entity Generator runs as a Java command or as a Maven Plugin.',
    },
    'Dev Servers': {
      description:
        'Dev Servers is a Docker Compose asset to setup server tools for CI / CD. It setups the following tools with Docker and makes them available immediately.<br/><br/>- Souce Code Management : GitBucket<br/>- Continuous Integration : Jenkins<br/>- Static Code Analysis : SonarQube<br/>- Issue Tracking System : Redmine<br/>- Artifact Repository Manager : Nexus<br/>- Wiki : Wiki.js',
      usage: 'Dev Servers runs as Docker Compose',
    },
    'Csv Loader': {
      description:
        "CSV Loader is a tool to load CSV files into DB.As of v0.8, CSV Loader is specialized for Flyway's Java-based Migration. We plan to support standalone jar execution, Maven Plugin, etc. in the next version.",
      usage: 'Csv Loader is used as a Java library via Flyway.',
    },
  },
  s = 'Project Au Lait is developed and operated by Monocrea Co., Ltd.',
  o = { catchphrase: e, description: a, products: t, operatedBy: s };
export { e as catchphrase, o as default, a as description, s as operatedBy, t as products };
