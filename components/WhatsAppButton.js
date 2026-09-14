export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971522149086"
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed right-[18px] bottom-[18px] z-[90] flex min-h-[52px] items-center gap-[10px] rounded-full bg-ink px-[20px] py-[14px] text-[14px] font-semibold text-white shadow-[0_14px_34px_rgba(20,18,26,.28)] hover:bg-brand hover:text-white hover:-translate-y-[2px]"
    >
      <span className="relative inline-block h-[9px] w-[9px] flex-none rounded-full bg-[#4ADE80]">
        <span className="absolute -inset-1 rounded-full bg-[#4ADE80] animate-tm-ping-fast"></span>
      </span>
      <span>WhatsApp us</span>
    </a>
  );
}
