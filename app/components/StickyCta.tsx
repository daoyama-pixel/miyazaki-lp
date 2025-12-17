"use client";

type Props = {
  appStoreUrl: string;
  googlePlayUrl: string;
};

export default function StickyCta({ appStoreUrl, googlePlayUrl }: Props) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] md:hidden">
      <div className="mx-auto max-w-3xl px-3 pb-[max(12px,env(safe-area-inset-bottom))]">
        <div className="rounded-2xl bg-white/95 shadow-lg border border-black/10 overflow-hidden min-h-[168px]">
          {/* 上段：無料で遊んで〜（画像CTA） */}
          <div className="px-3 pt-3">
            <img
              src="/images/cta-moji.webp"
              alt="無料で遊んで、豪華景品に応募！"
              width={1200}
              height={220}
              className="mx-auto w-[92%] max-w-[520px] h-auto"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* 下段：ストアボタン */}
          <div className="px-3 pt-1 pb-2">
            <div className="grid grid-cols-2 gap-2">
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label="App Storeで開く"
              >
                <div className="h-24 w-full flex items-center justify-center rounded-2xl shadow-sm">

                  <img
                    src="/images/cta-ios.webp"
                    alt="App Storeからダウンロード"
                    width={600}
                    height={180}
                    className="h-24 w-auto object-contain"
                    decoding="async"
                  />
                </div>
              </a>

              <a
                href={googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label="Google Playで開く"
              >
                <div className="h-24 w-full flex items-center justify-center rounded-2xl shadow-sm">

                  <img
                    src="/images/cta-google.webp"
                    alt="Google Playで手に入れよう"
                    width={600}
                    height={180}
                    className="h-24 w-auto object-contain"
                    decoding="async"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
