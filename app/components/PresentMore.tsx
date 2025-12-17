"use client";

import { useState } from "react";

export default function PresentMore() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="text-center">
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full bg-[#F3D26B] px-6 py-3 font-bold"
        >
          {isOpen ? "▲ 閉じる ▲" : "▼ もっと見る ▼"}
        </button>
      </div>

      {isOpen && (
        <div className="mt-6 space-y-6">
          {/* ===== ① 完全クリア賞 ===== */}
          <Section title="① 完全クリア賞" accent>
            <p className="font-bold text-orange-500">
              ５つのお宝（東京２つ、宮崎３つ）をすべて集めたあなたに！
            </p>
            <p className="mt-2 text-sm text-gray-700">
              抽選で10,000円相当の豪華景品が当たる
            </p>

            <ul className="mt-4 space-y-2 text-sm leading-relaxed">
  <li className="flex items-start justify-between gap-3">
    <span>宮崎牛ロースギフト（190g×2）</span>
    <span className="whitespace-nowrap font-semibold text-gray-600">5名様</span>
  </li>

  <li className="flex items-start justify-between gap-3">
    <span>
      宮崎牛肩ロース・モモギフト（肩ロース200g、モモ250g）とうなぎ蒲焼長焼のセット
    </span>
    <span className="whitespace-nowrap font-semibold text-gray-600">5名様</span>
  </li>

  <li className="flex items-start justify-between gap-3">
    <span>甕雫とうなぎ蒲焼長焼のセット</span>
    <span className="whitespace-nowrap font-semibold text-gray-600">5名様</span>
  </li>

  <li className="flex items-start justify-between gap-3">
    <span>
      ウォッカ（1983 J.CAVIAR VODKA) 750mlと宮崎牛塩ジャーキーと日向夏みかん酒のセット
    </span>
    <span className="whitespace-nowrap font-semibold text-gray-600">5名様</span>
  </li>

  <li className="flex items-start justify-between gap-3">
    <span>ソラシドエア　羽田⇔宮崎往復航空券</span>
    <span className="whitespace-nowrap font-semibold text-gray-600">1名様</span>
  </li>
</ul>


            <Figure src="/images/present2.webp" alt="完全クリア賞 景品イメージ" />
          </Section>

          {/* ===== ② 中間クリア賞 ===== */}
          <Section title="② 中間クリア賞">
            <p className="font-bold text-orange-500">
              東京編、宮崎編どちらかの宝をすべて集めたあなたに！
            </p>
            <p className="mt-2 text-sm text-gray-700">
              抽選で5,000円相当の豪華景品が当たる
            </p>

            <ul className="mt-4 space-y-2 text-sm leading-relaxed">
  <li className="flex items-start justify-between gap-3">
    <span>チキン南蛮　宮崎県産鶏もも肉とミニチキン南蛮　ムネ肉のセット</span>
    <span className="whitespace-nowrap font-semibold text-gray-600">2名様</span>
  </li>

  <li className="flex items-start justify-between gap-3">
    <span>みやざき犬クッションとみやざき犬トートバッグとみやざき犬ハンドタオルのセット</span>
    <span className="whitespace-nowrap font-semibold text-gray-600">2名様</span>
  </li>

  <li className="flex items-start justify-between gap-3">
    <span>マンゴードリンク（720ml）と日向夏ドリンク（720ml）のセット</span>
    <span className="whitespace-nowrap font-semibold text-gray-600">2名様</span>
  </li>
</ul>


            <Figure src="/images/present3.webp" alt="中間クリア賞 景品イメージ" />
          </Section>

          {/* ===== ③ スポットクリア賞 ===== */}
          <Section title="③ スポットクリア賞">
            <p className="font-bold text-orange-500">お宝を１つ以上集めたあなたに！</p>
            <p className="mt-2 text-sm text-gray-700">
              抽選で2,000円相当の景品が当たる
            </p>

            <ul className="mt-4 space-y-2 text-sm leading-relaxed">
  <li className="flex items-start justify-between gap-3">
    <span>ウォッカ（1983 J.CAVIAR VODKA) 100mlと牛せんべい喜びスパイスのセット</span>
    <span className="whitespace-nowrap font-semibold text-gray-600">3名様</span>
  </li>

  <li className="flex items-start justify-between gap-3">
    <span>ポークロースステーキ（ゆず塩）（みそ仕立）（しょうがたれ）のセット</span>
    <span className="whitespace-nowrap font-semibold text-gray-600">3名様</span>
  </li>

  <li className="flex items-start justify-between gap-3">
    <span>エココンビニバッグ折タタミとみやざき犬トートバッグとみやざき犬ハンドタオルのセット</span>
    <span className="whitespace-nowrap font-semibold text-gray-600">4名様</span>
  </li>
</ul>


            <Figure src="/images/present4.webp" alt="スポットクリア賞 景品イメージ" />
          </Section>

          {/* ===== ④ SNS特別賞 ===== */}
          <Section title="④ SNS特別賞">
            <p className="font-bold text-orange-500">旅の記念写真をSNSに投稿したあなたに！</p>
            <p className="mt-2 text-sm text-gray-700">
              抽選で2000円相当の景品が当たる
              <br />
              X、Instagram、Facebookでの投稿が対象となります。
            </p>

            <ul className="mt-4 space-y-2 text-sm leading-relaxed">
  <li className="flex items-start justify-between gap-3">
    <span>宮崎和牛カレーとガンジスカレーのセット</span>
    <span className="whitespace-nowrap font-semibold text-gray-600">3名様</span>
  </li>

  <li className="flex items-start justify-between gap-3">
    <span>宮崎マンゴーゴーフレットと宮崎牛パイと宮崎日向夏みかんサブレのセット</span>
    <span className="whitespace-nowrap font-semibold text-gray-600">2名様</span>
  </li>
</ul>


            <Figure src="/images/present5.webp" alt="SNS特別賞 景品イメージ" />

            {/* SNS導線（元画像寄せ） */}
<div className="mt-6">
  {/* 帯 */}
  <div className="rounded-full bg-[#F3D26B] px-4 py-3 text-center font-bold">
    イベント公式SNS
  </div>

  {/* 白い枠 */}
  <div className="mt-3 rounded-2xl border-2 border-[#F3D26B] bg-white p-4">
    <div className="flex items-center justify-center gap-6">
      <a
        href="https://x.com/hiina_miyazaki"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center"
        aria-label="X（旧Twitter）"
      >
        <img
          src="/images/logo-x.webp"
          alt="X"
          className="h-14 w-14"
          loading="lazy"
          decoding="async"
        />
      </a>

      <a
        href="https://www.instagram.com/hiina_miyazaki/"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center"
        aria-label="Instagram"
      >
        <img
          src="/images/logo-insta.webp"
          alt="Instagram"
          className="h-14 w-14"
          loading="lazy"
          decoding="async"
        />
      </a>

      <a
        href="https://www.facebook.com/people/%E5%AE%AE%E5%B4%8E%E7%9C%8C%E6%9D%B1%E4%BA%AC%E4%BA%8B%E5%8B%99%E6%89%80/100077986137770/"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center"
        aria-label="Facebook"
      >
        <img
          src="/images/logo-facebook.webp"
          alt="Facebook"
          className="h-14 w-14"
          loading="lazy"
          decoding="async"
        />
      </a>
    </div>
  </div>
</div>

          </Section>
        </div>
      )}
    </>
  );
}

/** セクション共通（壊れにくい） */
function Section({
  title,
  children,
  accent = false,
}: {
  title: string;
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-black/10 bg-white">
      <div className={`px-4 py-3 ${accent ? "bg-amber-100" : "bg-amber-50"}`}>
  <div className="flex justify-center">
    <div className="inline-flex items-center rounded-full bg-[#F3D26B] px-6 py-2 font-bold">
      {title}
    </div>
  </div>
</div>
      <div className="px-5 py-4">{children}</div>
    </section>
  );
}

function Figure({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mt-5">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto rounded-xl"
        loading="lazy"
        decoding="async"
      />
      <p className="mt-2 text-center text-xs text-gray-500">※景品写真はイメージです</p>
    </div>
  );
}
