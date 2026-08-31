export function Currently() {
  return (
    <section id="currently">
      <h2 className="font-inter text-label-caps text-primary uppercase mb-4 flex items-center gap-2 font-semibold tracking-wider">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
        </span>
        Currently
      </h2>
      <div className="bg-[#12121a] border border-[#1e1e2e] rounded-xl p-6">
        <p className="font-inter text-body-md text-on-surface leading-relaxed">
          Daily-driving <strong className="font-semibold text-white">Omarchy</strong>{" "}
          (Arch + Hyprland) and running a small homelab —{" "}
          <strong className="font-semibold text-white">Pi-hole</strong> for DNS,{" "}
          <strong className="font-semibold text-white">Traefik</strong> as a reverse
          proxy, <strong className="font-semibold text-white">WireGuard</strong> for
          remote access, and an frp tunnel to a self-hosted Minecraft server.
        </p>
      </div>
    </section>
  );
}
