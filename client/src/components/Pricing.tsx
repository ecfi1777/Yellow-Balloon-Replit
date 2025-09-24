export default function Pricing() {
  const pricingData = [
    { service: "Baby's First Haircut", price: "$30", notes: "Includes certificate & keepsake lock of hair" },
    { service: "Boys Haircut (2-10 years)", price: "$25", notes: "Includes wash, cut, and styling" },
    { service: "Girls Haircut (2-10 years)", price: "$28", notes: "Includes wash, cut, and styling" },
    { service: "Teen Boys (11-17 years)", price: "$30", notes: "Modern styles and trends" },
    { service: "Teen Girls (11-17 years)", price: "$35", notes: "Includes styling consultation" },
    { service: "Adult Haircut", price: "$40", notes: "For parents accompanying children" },
    { service: "Simple Braid", price: "$15", notes: "French braid, side braid" },
    { service: "Fancy Up-Do", price: "$45", notes: "Special occasions, parties" },
    { service: "Nail Polish", price: "$8", notes: "Fun colors available" },
    { service: "Glitter Hair Spray", price: "$5", notes: "Temporary sparkle" },
    { service: "Lice Screening", price: "$25", notes: "Private, confidential service" },
    { service: "Lice Treatment", price: "$85/hour", notes: "Thorough removal process" },
    { service: "Glamour Party (per child)", price: "$35", notes: "Minimum 4 children" }
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <div className="animate-bounce-slow text-sm text-foreground tracking-wider uppercase">
            Pricing
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-primary">
            Transparent Pricing
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl border-2 border-primary/20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-primary/20">
                    <th className="px-6 py-4 text-left font-bold text-foreground" data-testid="header-service">Service</th>
                    <th className="px-6 py-4 text-left font-bold text-foreground" data-testid="header-price">Price</th>
                    <th className="px-6 py-4 text-left font-bold text-foreground" data-testid="header-notes">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((item, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-primary/10 hover-elevate transition-all duration-200"
                      data-testid={`row-pricing-${index}`}
                    >
                      <td className="px-6 py-4 font-medium text-foreground">{item.service}</td>
                      <td className="px-6 py-4 font-semibold text-primary">{item.price}</td>
                      <td className="px-6 py-4 text-muted-foreground">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-gradient-to-r from-secondary/10 to-accent/10 border-t border-primary/20">
              <p className="text-sm text-muted-foreground text-center">
                All services include balloon and lollipop. Prices subject to change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}