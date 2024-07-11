type UserProps = {
    user: {
        name: string,
        cpf: string,
        card_number: string,
        card_expiration: string,
        CVV: number
    }
}

export async function getUser() {
    const response = await fetch("http://localhost:3000/user.json", {
        cache: "no-cache",
      });
      const { user }: UserProps = await response.json();

      return user
}