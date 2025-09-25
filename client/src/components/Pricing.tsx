export default function Pricing() {
  const pricingData = [
    { service: "Baby's First Haircut (Newborn–12 mo.)", price: "$30", notes: "Includes certificate & keepsake lock (optional)" },
    { service: "Boys Haircut (Under 11)", price: "$30–$33", notes: "" },
    { service: "Boys Haircut (11–17)", price: "$30–$35", notes: "" },
    { service: "Girls Haircut (Under 11)", price: "$35–$45", notes: "" },
    { service: "Girls Haircut (11–17)", price: "$45–$55", notes: "" },
    { service: "Kids Bang Trim", price: "$15", notes: "" },
    { service: "Kids Shampoo", price: "$5", notes: "" },
    { service: "Kids Shampoo & Blow Out", price: "$20+", notes: "" },
    { service: "Kids Flat Iron", price: "$30+", notes: "" },
    { service: "Kids Fancy Up-Do", price: "$50", notes: "" },
    { service: "French Braid", price: "$15+", notes: "" },
    { service: "Corn Rows (Half Head)", price: "$35", notes: "" },
    { service: "Kids Nail Polish", price: "$15", notes: "" },
    { service: "Mom's Haircut (no shampoo)", price: "$55+", notes: "" },
    { service: "Mom's Shampoo & Blow Dry", price: "$40", notes: "" },
    { service: "Dad's Haircut", price: "$36", notes: "" },
    { service: "Color", price: "$70+", notes: "" },
    { service: "Highlights (Kids)", price: "$60+", notes: "" },
    { service: "Highlights (Adults)", price: "$100+", notes: "" }
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <div className="animate-bounce-slow text-sm text-foreground tracking-wider uppercase">
            Pricing
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
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
                Shampoo is not included with haircuts. Prices may vary depending on hair length & thickness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}