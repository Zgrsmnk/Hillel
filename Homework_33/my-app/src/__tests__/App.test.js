import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {

  test("renders TODO heading ", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /todo/i })).toBeInTheDocument();
  });

  test("enter a numbers and letters in a field ", () => {
    render(<App />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, {
      target: { value: "Todo123" },
    });

    expect(input).toHaveValue("Todo123");
  });

  test("show validation error when submitting form", () => {
    render(<App />);

    const button = screen.getByRole("button", {
      name: /add/i,
    });

    fireEvent.click(button);

    expect(screen.getByText(/required/i)).toBeInTheDocument();
  });

  test("adds new todo item", () => {
    render(<App />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", {
      name: /add/i,
    });

    fireEvent.change(input, {
      target: { value: "React & JS" },
    });

    fireEvent.click(button);

    expect(screen.getByText(/React & JS/i)).toBeInTheDocument();
  });

  test("adds two and more items to todo list", () => {
    render(<App />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", {
      name: /add/i,
    });

    fireEvent.change(input, {
      target: { value: "Hillel" },
    });

    fireEvent.click(button);

    fireEvent.change(input, {
      target: { value: "The Best School" },
    });

    fireEvent.click(button);

    expect(screen.getByText(/Hillel/i)).toBeInTheDocument();
    expect(screen.getByText(/The Best School/i)).toBeInTheDocument();
  });
});
