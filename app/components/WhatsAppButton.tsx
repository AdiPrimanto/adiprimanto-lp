import { BsWhatsapp } from "react-icons/bs";

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/6285727346620?text=Halo%20Adi%20Primanto,%20saya%20ingin%20membuat%20website%20untuk%20bisnis%20saya."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-500/30 transition-all hover:scale-110 group"
    title="Chat WhatsApp"
  >
    <BsWhatsapp size={32} />
    <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
      Ada pertanyaan? Chat saya!
    </span>
  </a>
);

export default WhatsAppButton;
