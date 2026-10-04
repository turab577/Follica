export function formatPrice(amount: number) {
  return `Rs ${amount.toLocaleString("en-PK")}`;
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
