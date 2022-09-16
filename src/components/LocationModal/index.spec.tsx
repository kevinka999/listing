import { render, screen } from "@testing-library/react";
import { mockUserList } from "services/mocks"
import { LocationModal } from "components"

describe("location modal component", () => {
    it("should display the modal on screen when prop is true", () => {
        const { results } = mockUserList;

        render(<LocationModal isOpen={true} handleClose={() => null} user={results[0]}/>)

        expect(screen.getByText("Location details")).toBeInTheDocument();
    })

    it("should not display the modal on screen when prop is false", () => {
        const { results } = mockUserList;

        render(<LocationModal isOpen={false} handleClose={() => null} user={results[0]}/>)

        expect(screen.queryByText("Location details")).not.toBeInTheDocument();
    })
})