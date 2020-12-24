const capitalize = (text: string) =>
  text.charAt(0).toLocaleUpperCase() + text.slice(1);

export class ApiError extends Error {
  constructor(private errorMessage: string | string[]) {
    super();
    this.name = "ApiError";
  }

  toFormattedErrorMessage() {
    if (typeof this.errorMessage === "string") {
      return capitalize(this.errorMessage);
    }

    const [first, ...rest] = this.errorMessage;
    return [capitalize(first), ...rest].join(", ");
  }
}
