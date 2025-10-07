# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🎮 Tic Tac Toe Multiplayer Game (React + Node.js + Socket.IO)

このリポジトリは、**3週間でマルチプレイ対応○×ゲーム**を開発する学習プロジェクトです。  
フロントエンドは **React + Vite**、バックエンドは **Node.js + Socket.IO**、  
本番環境は **Oracle Cloud Always Free** を使用します。

---

## 🗓 開発スケジュール（3週間プラン）

| 週 | ゴール | 内容 |
|----|--------|------|
| **第1週** | シングルプレイ○×ゲーム完成 | ReactでUIとゲームロジックを構築 |
| **第2週** | マルチプレイ通信実装 | Socket.IOでリアルタイム通信 |
| **第3週** | Oracle Cloud上で運用 | 他デバイスからアクセス可能に |

---

## ✅ 第1週：Reactでシングルプレイ版を完成

**目的**：フロントエンドの構築とゲームロジックの理解

- [ ] Day1：Vite + React プロジェクト作成（`Board`, `Square` コンポーネント設計）
- [ ] Day2：3×3 グリッドを描画（CSS整備）
- [ ] Day3：クリックで○×を交互に配置
- [ ] Day4：勝敗判定ロジックの実装
- [ ] Day5：リセットボタンとリファクタリング
- [ ] Day6：UI改善・スタイル調整
- [ ] Day7：動作確認・コメント整理・GitHubへ初Push

🟢 **週末目標**：ローカルで遊べる○×ゲームを完成させる。

---

## 🌐 第2週：Socket.IOでマルチプレイ化

**目的**：リアルタイム通信を通してプレイヤー間同期を実装

- [ ] Day8：Node.js + Expressでサーバー作成
- [ ] Day9：Socket.IOサーバー設定（`connection` / `emit`）
- [ ] Day10：フロントにSocket.IO-client導入
- [ ] Day11：クリック内容をサーバー経由で送受信
- [ ] Day12：交互ターン処理・同期バグ修正
- [ ] Day13：複数ブラウザでリアルタイム対戦テスト
- [ ] Day14：リファクタリング・コメント整理・Git更新

🟢 **週末目標**：2人でリアルタイムに対戦できるマルチプレイ版を完成。

---

## ☁️ 第3週：Oracle Cloudにデプロイして運用

**目的**：クラウド環境にデプロイし、外部からアクセス可能にする

- [ ] Day15：Oracleアカウント確認・SSH接続テスト
- [ ] Day16：Ubuntu環境整備・Node.js（nvm）導入
- [ ] Day17：ソースコードをアップロード（Git Pull または scp）
- [ ] Day18：PM2でNodeサーバー常駐化
- [ ] Day19：ファイアウォール設定（ポート開放）
- [ ] Day20：別デバイスから接続テスト
- [ ] Day21：UI整備・終了演出・バックアップ設定

🟢 **最終目標**：Oracle Cloud上で常時稼働し、他デバイスでもプレイ可能に！

---

## 📦 技術スタック

| 分野 | 使用技術 | 説明 |
|------|------------|------|
| フロントエンド | React + Vite | UI構築・ゲーム画面 |
| バックエンド | Node.js + Express | API・サーバー処理 |
| 通信 | Socket.IO | リアルタイム通信 |
| デプロイ | Oracle Cloud Always Free | 無料クラウド環境 |
| 管理 | PM2, GitHub | プロセス・バージョン管理 |

---

## 🧭 今後の拡張アイデア

- [ ] 対戦履歴・スコア保存（MongoDB / SQLite）
- [ ] ルーム機能（Socket.IO namespace）
- [ ] アニメーション演出・サウンド追加
- [ ] モバイルUI対応
- [ ] SSL化 / 独自ドメイン設定

---

## 🧠 学習目的

このプロジェクトでは以下のスキルを習得します：

- Reactでの状態管理とコンポーネント構成
- Node.jsサーバー構築の基礎
- Socket.IOによる双方向通信
- クラウド（Oracle Always Free）でのデプロイ運用
- GitHubでのバージョン管理とチーム開発準備

---

## 📘 ライセンス

このプロジェクトは学習目的で作成されています。  
自由にフォーク・改変して利用可能です。

---

✨ **目標**：  
> “最初に動くものを作り、そこから学ぶ”  
> — 学びながら完成を目指す3週間チャレンジ！
