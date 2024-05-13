"use client";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5512991604267", "_blank");
  };

  return (
    <div
      className="fixed right-5 bottom-5 cursor-pointer"
      onClick={handleWhatsAppClick}
    >
      <img
        className="hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-6 hover:scale-105 cursor-pointer"
        src="/WhatsApp_icon.png"
        alt="Ícone do WhatsApp"
        width={50}
        height={50}
      />
    </div>
  );
};
