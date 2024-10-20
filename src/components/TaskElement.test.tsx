import { render, screen, fireEvent  } from '@testing-library/react';
import { TaskElement } from "./TaskElement";

test("renders TaskElement component correctly", () => {
    render(<TaskElement task="Test task" id="id" completed={false} />);
    expect(screen.getByText("Test task")).toBeInTheDocument();
});

test("marks task as completed when clicked", () => {
    render(<TaskElement task="Test task" id="1" completed={false} />);

    // начальное состояние:
    const taskText = screen.getByText("Test task");
    expect(taskText).not.toHaveClass("line-through");

    fireEvent.click(taskText);

    // Выполненное состояние:
    expect(taskText).toHaveClass("line-through");
});
