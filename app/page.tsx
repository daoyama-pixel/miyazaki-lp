"use client";

import StickyCta from "./components/StickyCta";
import { useState } from "react";
import PresentMore from "./components/PresentMore";

export default function Home() {
  const links = {
    tokyo: "https://link.locatone.sony.net/vRJUZZ14E5",
    miyazaki: "https://link.locatone.sony.net/J66DS1HTj5",
    appStore: "https://apps.apple.com/jp/app/locatone/id1524608592",
    googlePlay: "https://play.google.com/store/apps/details?id=jp.co.sony.soundar.smp",
    faq: "/qanda",
    privacy: "/privacypolicy",
    sns: {
      x: "https://x.com/hiina_miyazaki",
      instagram: "https://www.instagram.com/hiina_miyazaki/",
      facebook:
        "https://www.facebook.com/people/%E5%AE%AE%E5%B4%8E%E3%82%B5%E3%82%A6%E3%83%B3%E3%83%89%E3%83%9F%E3%82%B9%E3%83%86%E3%83%AA%E3%83%BC%E3%83%84%E3%82%A2%E3%83%BC-%E3%81%B2%E3%83%BC%E3%81%AA%E3%81%A8%E5%B7%A1%E3%82%8B%E7%99%92%E3%82%84%E3%81%97%E3%81%AE%E5%AE%AE%E5%B4%8E%E6%97%85%E5%85%AC%E5%BC%8F/61581380831587/",
    },
    partners: {
      mtokyo: "https://www.mtokyo.jp/",
      mtokyo_x: "https://x.com/miyazakip_tokyo",
      mtokyo_ig: "https://www.instagram.com/miyazakip_tokyo/",
      mtokyo_fb: "https://www.facebook.com/miyazakipref.tokyo/about",
      konne: "https://www.konne.jp/",
      solaseed: "https://www.solaseedair.jp/",
      mikagami: "https://1mikagami.com/home",
      locatone: "https://www.locatone.sony.net/",
    },
  };

  // 小物：よく使う“白い窓”
  const Card = ({ children }: { children: React.ReactNode }) => (
    <div className="mx-auto w-full max-w-[640px] rounded-[28px] bg-white/90 p-5 shadow-md border border-black/5">
      {children}
    </div>
  );

  // ===== セクションタイトル共通コンポーネント =====
  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <div className="mb-4 flex justify-center">
      <div className="
      w-full max-w-[680px]
      rounded-2xl
      bg-[#F6D778]
      px-6 py-3
      text-center
      font-bold
      text-black/85
      shadow-sm
      text-base sm:text-lg
    ">
        {children}
      </div>
    </div>
  );


  const StoreButtons = () => (
    <div className="grid grid-cols-2 gap-3">
      <a href={links.appStore} target="_blank" rel="noopener noreferrer" className="block">
        <img src="/images/cta-ios.webp" alt="App Storeからダウンロード" className="w-full h-auto" />
      </a>
      <a href={links.googlePlay} target="_blank" rel="noopener noreferrer" className="block">
        <img src="/images/cta-google.webp" alt="Google Playで手に入れよう" className="w-full h-auto" />
      </a>
    </div>
  );

  const StartButtons = () => (
    <div className="grid grid-cols-2 gap-3">
      <a href={links.tokyo} target="_blank" rel="noopener noreferrer" className="block">
        <img src="/images/cta-tokyo.webp" alt="東京編を聞く！" className="w-full h-auto" />
      </a>
      <a href={links.miyazaki} target="_blank" rel="noopener noreferrer" className="block">
        <img src="/images/cta-miyazaki.webp" alt="宮崎編を聞く！" className="w-full h-auto" />
      </a>
    </div>
  );

  const ToggleShell = ({ id }: { id: string }) => (
    <div id={id} className="mt-4 overflow-hidden rounded-[22px] border border-black/10 bg-white/80">
      <div className="bg-[#F6D46B] py-3 text-center font-bold">▼ もっと見る ▼</div>
      <div className="p-4 text-sm opacity-70">
        ※ここは後で「テキストのトグル」に差し替えます（今は枠だけ）。
      </div>
    </div>
  );

  return (
    <main
      className="min-h-screen pb-32 md:pb-0"
      style={{
        backgroundImage: "url(/images/background.webp)",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      {/* ===== HERO ===== */}
      <header className="w-full">
        {/* 画像の枠（先に高さ確保してCLS防止） */}
        <div className="w-full aspect-[16/9] max-h-[60vh] md:max-h-[420px] overflow-hidden bg-[#F7F1DF]/90">
          <picture>
            <source media="(min-width: 768px)" srcSet="/images/hero-pc.webp" />
            <img
              src="/images/hero.webp"
              alt="音×ARでめぐる 宮崎ミステリーツアー"
              className="h-full w-full object-cover md:object-contain"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>




        {/* ロゴ・コピー・CTA */}
        <div className="mx-auto max-w-3xl px-4 pt-4 pb-8 space-y-4">
          <img
            src="/images/logo-title.webp"
            alt="東京〜宮崎 サウンドミステリーツアー"
            width={840}
            height={240}
            className="mx-auto w-[70%] max-w-[420px] h-auto"
            loading="eager"
            decoding="async"
          />

          <img
            src="/images/moji-otowo.webp"
            alt="音を使ったスタンプラリーを体験してみよう！"
            className="mx-auto w-[92%] max-w-[560px] h-auto"
            loading="eager"
            decoding="async"
          />

          <div className="mx-auto w-full max-w-[640px] rounded-[28px] bg-white/90 p-4 shadow-md border border-black/5">
            <StartButtons />
          </div>
        </div>
      </header>


      {/* ===== 3つのワクワク体験 ===== */}
      <section className="pb-10">

        <div className="px-4">
          <Card>
            <div className="py-6 space-y-10 text-center">
              <SectionTitle>3つのワクワク体験</SectionTitle>
              {/* ① */}
              <div className="space-y-3">
                <p className="font-bold text-[20px] leading-snug">
                  ① 音で楽しむ<br />“新感覚スタンプラリー”
                </p>
                <p className="text-[15px] leading-relaxed text-black/70">
                  景色に合わせてストーリーが始まる、新感覚の音声体験。
                </p>

                <img
                  src="/images/wakuwaku1.webp"
                  alt="音で楽しむ新感覚スタンプラリーのイメージ"
                  className="w-[50%] max-w-[320px] mx-auto h-auto block"
                />
              </div>

              {/* ② */}
              <div className="space-y-3">
                <p className="font-bold text-[20px] leading-snug">
                  ② かわいい“ゆるキャラ”<br />ひーな＆ルーナが宝探しをナビゲート
                </p>
                <p className="text-[15px] leading-relaxed text-black/70">
                  失われた“大事な宝物”を探す冒険。観光しながらワクワクできる、アプリならではの体験です。
                </p>

                <img
                  src="/images/wakuwaku2.webp"
                  alt="ひーなとルーナが宝探しをナビゲートするイメージ"
                  className="w-[74%] max-w-[460px] mx-auto h-auto block"
                />
              </div>

              {/* ③ */}
              <div className="space-y-3">
                <p className="font-bold text-[20px] leading-snug">
                  ③ 集めた宝で<br />豪華景品に応募できる
                </p>
                <p className="text-[15px] leading-relaxed text-black/70">
                  宮崎牛、マンゴー、うなぎなど最大1万円相当の景品が当たるチャンス！
                </p>

                <img
                  src="/images/wakuwaku3.webp"
                  alt="豪華景品に応募できるイメージ"
                  className="w-[70%] max-w-[440px] mx-auto h-auto block"
                />
              </div>

            </div>
          </Card>
        </div>
      </section>


      {/* ===== STEPS ===== */}
      <section className="pb-10">
        <div className="px-4">
          <Card>
            <ol className="space-y-12">

              {/* ================= STEP 1 ================= */}
              <li className="text-center">
                <SectionTitle>遊び方はたった3ステップ</SectionTitle>
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#F3D26B] font-bold">
                  1
                </div>

                <p className="mb-4 font-bold">アプリをダウンロード</p>

                <div className="flex flex-col items-center gap-3">
                  <a
                    href={links.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src="/images/cta-ios.webp"
                      alt="App Storeからダウンロード"
                      className="h-16 w-auto md:h-20"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>

                  <a
                    href={links.googlePlay}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src="/images/cta-google.webp"
                      alt="Google Playで手に入れよう"
                      className="h-16 w-auto md:h-20"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                </div>
              </li>

              {/* ================= STEP 2 ================= */}
              <li className="text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#F3D26B] font-bold">
                  2
                </div>

                <p className="mb-4 font-bold">
                  アプリを開いて<br />ツアーをスタート
                </p>

                {/* STEP2 画像 */}
                <div className="mx-auto w-full max-w-[240px]">
                  <img
                    src="/images/step2-1.webp"
                    alt="アプリを開いてツアーをスタート"
                    className="w-full h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </li>

              {/* ================= STEP 3 ================= */}
              <li className="text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#F3D26B] font-bold">
                  3
                </div>

                <p className="font-bold">
                  スポットに近づくと<br />
                  音声ガイドが自動再生！
                </p>

                {/* STEP3 画像 */}
                <div className="mx-auto w-full max-w-[240px]">
                  <img
                    src="/images/step3-1.webp"
                    alt="音声ガイドが自動再生"
                    className="w-full h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </li>
            </ol>
          </Card>
        </div>
      </section>



      {/* ===== TOKYO AREA ===== */}
      <section className="pb-10">
        <div className="px-4">
          <Card>


            {/* セクション見出し */}
            <SectionTitle>東京＆宮崎の絶景を巡ろう</SectionTitle>


            {/* ===== 東京編（ウィンドウ内の先頭） ===== */}
            <div className="mb-8 text-center">


              {/* tokyo-1 */}
              <div className="mx-auto w-full max-w-[420px]">
                <img
                  src="/images/tokyo-1.webp"
                  alt="東京編 マップ"
                  className="w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* ===== 東京スポット 1 ===== */}
            <div className="mb-10">
              <h4 className="mb-2 font-bold text-center">
                新宿駅南口エリア（新宿みやざき館KONNE前）
              </h4>

              <div className="mx-auto w-full max-w-[420px]">
                <img
                  src="/images/tokyo-2.webp"
                  alt="新宿駅南口エリア 新宿みやざき館KONNE前"
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <p className="mb-4 text-sm leading-relaxed">
                新宿駅から徒歩3分。「KONNE」には、宮崎の食や観光情報が盛りだくさん♪
              </p>
            </div>

            {/* ===== 東京スポット 2 ===== */}
            <div>
              <h4 className="mb-2 font-bold text-center">
                羽田空港 第2ターミナルエリア
              </h4>



              <div className="mx-auto w-full max-w-[420px]">
                <img
                  src="/images/tokyo-3.webp"
                  alt="羽田空港 第2ターミナルエリア"
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="mb-4 text-sm leading-relaxed">
                宮崎へ向かう旅の玄関口。絶景フライトで、物語の舞台へひとっとび！
              </p>
            </div>

          </Card>
        </div>
      </section>

      {/* ===== MIYAZAKI AREA ===== */}
      <section className="pb-10">
        <div className="px-4">
          <Card>

            {/* セクション見出し（東京と揃えるなら同じ文言でもOK） */}
            <div className="mb-6 rounded-xl bg-[#F3D26B] px-4 py-3 text-center font-bold">
              神話のふるさと・宮崎へ
            </div>

            {/* ===== 宮崎編（ウィンドウ内の先頭） ===== */}
            <div className="mb-8 text-center">
              {/* miyazaki-1（宮崎編のマップ的な画像） */}
              <div className="mx-auto w-full max-w-[420px]">
                <img
                  src="/images/miyazaki-1.webp"
                  alt="宮崎編 マップ"
                  className="w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* ここに短い導入を足したければ（任意）
        <p className="mt-3 text-sm leading-relaxed">
          大自然と神話が息づく、癒やしの宮崎編。宝探しと物語がいよいよ本格スタート！
        </p>
        */}
            </div>

            {/* ===== 宮崎スポット 1 ===== */}
            <div className="mb-10">
              <h4 className="mb-2 font-bold text-center">鵜戸神宮エリア</h4>

              <div className="mx-auto w-full max-w-[420px]">
                <img
                  src="/images/miyazaki-2.webp"
                  alt="鵜戸神宮エリア"
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <p className="mt-4 text-sm leading-relaxed">
                海に突き出した神秘の洞窟神社。有名な「運玉投げ」を体験しよう！
              </p>
            </div>

            {/* ===== 宮崎スポット 2 ===== */}
            <div className="mb-10">
              <h4 className="mb-2 font-bold text-center">江田神社エリア</h4>

              <div className="mx-auto w-full max-w-[420px]">
                <img
                  src="/images/miyazaki-3.webp"
                  alt="江田神社エリア"
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <p className="mt-4 text-sm leading-relaxed">
                みそぎ・祈願発祥の地として知られる神社。静かな空気に身をゆだねて♪
              </p>
            </div>

            {/* ===== 宮崎スポット 3 ===== */}
            <div>
              <h4 className="mb-2 font-bold text-center">天岩戸神社（高千穂）エリア</h4>

              <div className="mx-auto w-full max-w-[420px]">
                <img
                  src="/images/miyazaki-4.webp"
                  alt="天岩戸神社（高千穂）エリア"
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <p className="mt-4 text-sm leading-relaxed">
                伝説的な神楽と神話の舞台として有名。写真映えスポットも多く、物語との相性も抜群。
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* ===== PRESENT ===== */}
      <section className="pb-10">
        <div className="px-4">
          <Card>

            {/* 見出し */}
            <div className="mb-3 rounded-xl bg-[#F3D26B] px-4 py-3 text-center font-bold">
              プレゼント
            </div>

            {/* 説明 */}
            <p className="mb-2 text-center font-bold">
              お宝を集めて豪華景品に応募しよう！
            </p>
            <p className="mb-4 text-center text-sm leading-snug">
              宮崎のグルメや名産品が当たる！
            </p>

            {/* 画像 */}
            <div className="mx-auto mb-4 w-full max-w-[440px]">
              <img
                src="/images/present1.webp"
                alt="宮崎のグルメや名産品が当たるプレゼント"
                className="w-full h-auto rounded-xl"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* ▼ もっと見る（ここだけ実装） */}
            <PresentMore />
          </Card>
        </div>
      </section>

      {/* ===== TOUR GUIDE ===== */}
      <section className="pb-10">
        <div className="px-4">
          <Card>
            {/* セクション見出し（あとで共通化予定） */}
            <div className="mb-6 rounded-xl bg-[#F3D26B] px-4 py-3 text-center font-bold">
              ツアー参加ガイド
            </div>

            {/* 開催期間 */}
            <div className="mb-6 text-center">
              <p className="font-bold">開催期間</p>
              <p className="mt-1 text-sm">
                令和7年11月1日〜令和8年1月31日
              </p>
            </div>

            {/* 参加費 */}
            <div className="mb-6 text-center">
              <p className="font-bold">参加費</p>
              <p className="mt-1 text-sm">参加無料</p>
              <p className="mt-1 text-xs text-black/60">
                （交通費・移動費等は参加者様のご負担となります）
              </p>
            </div>

            {/* 実施エリア */}
            <div className="mb-8 text-center">
              <p className="font-bold">実施エリア</p>
              <p className="mt-1 text-sm">
                東京編：新宿駅南口、羽田空港第2ターミナル
                <br />
                宮崎編：鵜戸神宮、江田神社、天岩戸神社
              </p>
            </div>

            {/* ===== 注意事項トグル ===== */}
            <details className="rounded-xl border border-black/10 bg-white overflow-hidden">

              <summary className="
  cursor-pointer list-none
  px-4 py-3 text-center
  font-semibold
  bg-orange-50
  text-black/80
  hover:bg-orange-100
  transition
">
                注意事項を見る
              </summary>

              <div className="px-4 py-4 text-sm leading-relaxed text-black/80 space-y-2">
                <p>※アカウントを非公開設定にしている場合は応募対象外となります。</p>
                <p>※複数のアカウントで応募された場合、当選資格を無効とさせていただきます。</p>
                <p>※応募は日本在住の方に限らせていただきます。</p>
                <p>※抽選・当選者への連絡および賞品発送は、本企画の運営事務局が行います。</p>
                <p>※当選者には、当選連絡に必要な情報を別途ご案内いたします。</p>
                <p>
                  ※当選連絡の際に記載される送信元ドメインは
                  <span className="font-medium">「@1mikagami.com」</span>
                  となります。受信できるよう、あらかじめ設定をご確認ください。
                </p>
                <p>※賞品の発送は日本国内のみとなります。</p>
                <p>※賞品の返品・交換はできません。</p>
                <p>※賞品発送後の配送状況に関するお問い合わせにはお答えできません。</p>
                <p>
                  ※住所不明・長期不在などにより賞品をお届けできない場合、
                  または当選連絡後一定期間ご返信がない場合は、
                  当選を無効とさせていただくことがあります。
                </p>
                <p>※掲載されている写真はイメージです。実際の賞品と異なる場合があります。</p>
              </div>
              <div className="my-4 text-center">
                <a
                  href={links.faq}
                  className="inline-block rounded-md border border-black/20 px-4 py-2 text-sm text-black/70 hover:bg-black/5 transition"
                >
                  よくある質問を見る
                </a>
              </div>


            </details>


          </Card>
        </div>
      </section>

      {/* ===== FOOTER（主催・リンク・コピーライトまとめ） ===== */}
      <section className="mx-auto mt-8 w-full max-w-[640px] px-4 pb-28">
        {/* 単色の“面” */}
        <div className="rounded-2xl bg-[#F3D26B]/40 p-4">

          {/* 主催・協力・制作（トグル） */}
          <details className="rounded-2xl border border-black/10 bg-[#FFF6D8]">
            <summary className="cursor-pointer list-none rounded-2xl px-4 py-3 text-center font-bold">
              主催・協力・制作を表示
            </summary>

            <div className="px-4 py-6 space-y-6">

              {/* ===== 主催 ===== */}
              <div className="rounded-2xl bg-white/85 p-5 shadow-sm">
                <p className="mb-3 text-center font-bold">主催</p>

                <div className="mx-auto mb-3 flex justify-center">
                  <img
                    src="/images/logo-miyazaki.webp"
                    alt="宮崎県"
                    className="h-16 w-auto"
                    loading="lazy"
                  />
                </div>

                <h3 className="mb-3 text-center font-bold">宮崎県東京事務所</h3>

                <div className="text-sm leading-relaxed opacity-80 space-y-3">
                  <p>
                    日本のひなた宮崎県 東京事務所は、
                    首都圏における宮崎県の情報発信拠点です。
                  </p>

                  <p>
                    宮崎県のちょっとした話題や、首都圏で開催されるイベント情報、
                    東京事務所の日々の活動などを発信しています。
                  </p>

                  <p>
                    宮崎県公式SNSへのリンクは、こちらからご覧いただけます。
                  </p>
                </div>


                <div className="mt-4 space-y-3">
                  <a
                    href={links.partners.mtokyo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl bg-[#F3D26B] py-3 text-center font-bold"
                  >
                    公式サイト
                  </a>
                  <a
                    href={links.partners.mtokyo_ig}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl bg-[#C13584] py-3 text-center font-bold text-white"
                  >
                    Instagram
                  </a>
                  <a
                    href={links.partners.mtokyo_x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl bg-black py-3 text-center font-bold text-white"
                  >
                    X
                  </a>
                  <a
                    href={links.partners.mtokyo_fb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl bg-[#1877F2] py-3 text-center font-bold text-white"
                  >
                    Facebook
                  </a>
                </div>
              </div>

              {/* ===== KONNE ===== */}
              <div className="rounded-2xl bg-white/85 p-5 shadow-sm">
                <div className="mb-3 flex justify-center">
                  <img src="/images/logo-konne.webp" alt="KONNE" className="h-10 w-auto" loading="lazy" />
                </div>

                <h3 className="mb-2 text-center font-bold">新宿みやざき館 KONNE</h3>

                <div className="text-sm leading-relaxed opacity-80 space-y-3">
                  <p>
                    新宿駅南口から徒歩1分。
                    サザンテラス内にある、宮崎県のアンテナショップです。
                  </p>

                  <p>
                    食品・焼酎・工芸品など、宮崎県の特産品を数多く取り揃えています。
                  </p>

                  <p>
                    観光情報コーナーでは、宮崎県内の観光情報もご案内しています。
                  </p>
                </div>


                <a
                  href={links.partners.konne}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block rounded-xl bg-[#F3D26B] py-3 text-center font-bold"
                >
                  公式サイト
                </a>
              </div>

              {/* ===== ソラシドエア ===== */}
              <div className="rounded-2xl bg-white/85 p-5 shadow-sm">
                <div className="mb-3 flex justify-center">
                  <img src="/images/logo-solaseed.webp" alt="ソラシドエア" className="h-10 w-auto" loading="lazy" />
                </div>

                <h3 className="mb-2 text-center font-bold">株式会社 ソラシドエア</h3>

                <div className="text-sm leading-relaxed opacity-80 space-y-3">
                  <p>
                    ソラシドエアは、本社を宮崎県宮崎市に構え、
                    「九州・沖縄の翼」として、羽田・沖縄と九州を結ぶ路線を展開しています。
                  </p>

                  <p>
                    現在は、毎日14路線・80便を運航し、
                    多くの方の九州・宮崎への旅を支えています。
                  </p>

                  <p>
                    宮崎の旅に行く際には、ぜひソラシドエアに乗って、
                    空の旅をお楽しみください。
                  </p>
                </div>


                <a
                  href={links.partners.solaseed}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block rounded-xl bg-[#F3D26B] py-3 text-center font-bold"
                >
                  公式サイト
                </a>
              </div>

              {/* ===== Locatone ===== */}
              <div className="rounded-2xl bg-white/85 p-5 shadow-sm">
                <div className="mb-3 flex justify-center">
                  <img
                    src="/images/logo_locatone.webp"
                    alt="Locatone"
                    className="h-8 w-auto"
                    loading="lazy"
                  />
                </div>

                <h3 className="mb-3 text-center font-bold">Locatone</h3>

                <div className="text-sm leading-relaxed space-y-3 opacity-80">
                  <p>
                    「Locatone（ロケトーン）」は、ソニーの技術を活用した、
                    現実世界に仮想世界の音が混ざり合う新感覚の音響体験サービスです。
                  </p>
                  <p>
                    スマートフォンからコンテンツを開始し、特定のスポットを訪れると、
                    位置情報に連動して自動的に音声や音楽が聞こえてきます。
                  </p>
                  <p>
                    音を聴きながら街を歩くことで、新しい魅力や楽しみ方を発見できます。
                  </p>
                  <p className="text-xs opacity-70">
                    ※「Locatone」はSoVeC株式会社が提供するアプリケーションです。<br />
                    ※「Locatone」はソニーグループ株式会社またはその関連会社の商標です。
                  </p>
                </div>

                <a
                  href="https://www.locatone.sony.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block rounded-xl bg-[#F3D26B] py-3 text-center font-bold"
                >
                  Locatone公式サイト
                </a>
              </div>


              {/* ===== ミカガミ ===== */}
              <div className="rounded-2xl bg-white/85 p-5 shadow-sm">
                <div className="mb-3 flex justify-center">
                  <img src="/images/logo-mikagami.webp" alt="ミカガミ" className="h-10 w-auto" loading="lazy" />
                </div>

                <h3 className="mb-2 text-center font-bold">株式会社シナリオテクノロジーミカガミ</h3>

                <div className="text-sm leading-relaxed opacity-80 space-y-3">
                  <p>
                    日本最大規模のシナリオ制作会社として、ゲーム・アニメ業界を中心に、
                    シナリオ執筆やそれに付随する制作を行っています。
                  </p>

                  <p>
                    『最高のシナリオを提供し、最大の顧客貢献を行うこと』の企業理念のもと、
                    これまでに国内外多くのお客様に高い評価をいただいてきました。
                  </p>

                  <p>
                    その知見を活かし、地方創生事業におけるプロモーションや地域周遊企画の領域でも、
                    物語の力を活かした体験づくりに取り組んでいます。
                  </p>
                </div>


                <a
                  href={links.partners.mikagami}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block rounded-xl bg-[#F3D26B] py-3 text-center font-bold"
                >
                  公式サイト
                </a>
              </div>

            </div>
            {/* ===== キャスト ===== */}
            <div className="rounded-2xl bg-white/85 p-5 shadow-sm">
              <div className="mb-4 flex justify-center">
                <img
                  src="/images/logo-withline.webp"
                  alt="WITH LINE"
                  className="h-12 w-auto"
                  loading="lazy"
                />
              </div>

              <h3 className="mb-4 text-center font-bold">
                キャスト（敬称略）<br />
                WITH LINE
              </h3>

              <div className="space-y-3 text-center text-sm">
                <div>
                  <p className="font-bold">ひーな役</p>
                  <p className="opacity-80">北川菜月</p>
                </div>

                <div>
                  <p className="font-bold">ルーナ役</p>
                  <p className="opacity-80">伊藤ゆいな</p>
                </div>

                <div>
                  <p className="font-bold">その他</p>
                  <p className="opacity-80">廣原ふう</p>
                  <p className="opacity-80">亀山雄慈</p>
                </div>
              </div>
            </div>






          </details>

          {/* プライバシー & コピーライト（帯の中にまとめる） */}
          <div className="mt-4 text-center">
            <a
              href={links.privacy}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold underline"
            >
              プライバシーポリシー
            </a>

            <p className="mt-2 text-xs text-black/70">
              © 2025 東京〜宮崎 サウンドミステリーツアー運営事務局
            </p>
          </div>
        </div>
      </section>

      <StickyCta
        appStoreUrl="https://apps.apple.com/jp/app/locatone/id1524608592"
        googlePlayUrl="https://play.google.com/store/apps/details?id=jp.co.sony.soundar.smp"
      />
    </main>
  );
}