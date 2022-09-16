import { render, screen } from "@testing-library/react";
import { mockUserList } from "services/mocks"
import { List } from "components"

describe("list component", () => {
    it("should display all the users on list", () => {
        const users = mockUserList.results
        render(<List data={users}/>)

        users.forEach((user) => {
            const fullName = `${user.name.first} ${user.name.last}` 
            expect(screen.getByText(fullName)).toBeInTheDocument();
        })
    })
})