export function calculateTotal(plan, billing, addOns) {
  const planPrices = {
    Arcade: {
      Monthly: 9,
      Yearly: 90,
    },

    Advanced: {
      Monthly: 12,
      Yearly: 120,
    },

    Pro: {
      Monthly: 15,
      Yearly: 150,
    },
  };

  const addOnPrices = {
    onlineservice: {
      Monthly: 1,
      Yearly: 10,
    },

    largestorage: {
      Monthly: 2,
      Yearly: 20,
    },

    gamelibrary: {
      Monthly: 2,
      Yearly: 20,
    },
  };

  let total = planPrices[plan][billing];

  Object.keys(addOns).forEach((addOn) => {
    if (addOns[addOn]) {
      total += addOnPrices[addOn][billing];
    }
  });

  return total;
}