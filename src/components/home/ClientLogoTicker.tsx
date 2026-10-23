import { tickerClients, type ClientLogo } from '@/data/clients';
import { cn } from '@/lib/utils';

const LogoSlide = ({
  clients,
  labelled,
}: {
  clients: ClientLogo[];
  labelled: boolean;
}) => (
  <ul
    className="flex w-max items-center gap-20 pr-20"
    aria-hidden={labelled ? undefined : true}
    aria-label={labelled ? 'Client organisations' : undefined}
  >
    {clients.map((client) => (
      <li key={`${labelled ? 'a' : 'b'}-${client.id}`} className="shrink-0">
        <div
          className={cn(
            'flex items-center justify-center',
            client.onDark && 'rounded-lg bg-navy px-4 py-2.5',
          )}
        >
          <img
            src={client.src}
            alt={labelled ? client.name : ''}
            className="h-16 w-auto max-w-[85vw] object-contain md:h-20 md:max-w-none"
          />
        </div>
      </li>
    ))}
  </ul>
);

export const ClientLogoTicker = () => {
  const duration = `${Math.max(90, tickerClients.length * 4.2)}s`;

  return (
    <section
      aria-label="Trusted by leading clubs and hospitality venues"
      className="logo-ticker relative overflow-hidden border-y border-white/70 py-12"
    >
      <div className="container-narrow relative z-10">
        <p className="mb-8 text-center font-sans text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by leading clubs and hospitality venues
        </p>
      </div>

      <div className="group relative z-10">
        <div
          className="client-marquee flex w-max items-center"
          style={{ animationDuration: duration }}
        >
          <LogoSlide clients={tickerClients} labelled />
          <LogoSlide clients={tickerClients} labelled={false} />
        </div>
      </div>
    </section>
  );
};
