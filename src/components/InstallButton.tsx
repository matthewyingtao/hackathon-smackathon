/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { FaInfo } from "react-icons/fa6";

const InstallButton: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      (deferredPrompt as any).prompt();
      (deferredPrompt as any).userChoice.then((choiceResult: any) => {
        console.log("choiceResult", choiceResult);
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <>
      {deferredPrompt && (
        <div
          className="alert fixed bottom-4 mx-4"
          style={{
            width: "calc(100% - 2rem)",
          }}
        >
          <FaInfo />

          <span>Hath thou the LinkedKin mobile application?</span>
          <div className="flex gap-x-2">
            <button className="btn btn-sm">Ye</button>
            <button
              className="btn btn-sm btn-primary"
              onClick={handleInstallClick}
            >
              Nay, Install
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default InstallButton;
