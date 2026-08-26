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
    className="flex w-max items-center gap-16 pr-16"
    aria-hidden={labelled ? undefined : true}
    aria-label={labelled ? 'Client organisations' : undefined}
  >
    {clients.map((client) => (
      <li key={`${labelled ? 'a' : 'b'}-${client.id}`} className="shrink-0">
        <div
          className={cn(
            'flex h-14 md:h-16 items-center justify-center',
            client.onDark && 'rounded-md bg-navy px-3 py-1.5',
          )}
        >
          <img
            src={client.src}
            alt={labelled ? client.name : ''}
            className="h-14 md:h-16 w-auto max-w-[11rem] object-contain opacity-90 transition-opacity hover:opacity-100"
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
      className="overflow-hidden border-y border-border bg-[#EEF0F2] py-12"
    >
      <div className="container-narrow">
        <p className="mb-8 text-center font-sans text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by leading clubs and hospitality venues
        </p>
      </div>

      <div className="group relative">
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
