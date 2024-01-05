import Card from "./components/card";
import GiftCards from "./data/gifts";

export default function Home() {
  return (
    <>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h1 className={`mb-3 text-2xl font-semibold`}>24/7 Support</h1>
          <p>
            Our experts are by your side 24 hours a day and even during holidays
            and will accompany you in case of any problem.
          </p>
        </div>
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h1 className={`mb-3 text-2xl font-semibold`}>Instant Delivery</h1>
          <p>
            You can buy your gift card in less than 1 minute and receive the
            code after payment.
          </p>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {GiftCards.map((gift) => (
          <Card key={gift.id} gift={gift} />
        ))}
      </div>
    </>
  );
}
