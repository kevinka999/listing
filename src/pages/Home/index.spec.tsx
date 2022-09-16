import { render, act, screen } from "@testing-library/react";
import { mockUserList } from "services/mocks"
import { Home } from "pages";

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(mockUserList)
})) as jest.Mock;

describe("home page component", () => {
    it("should fetch and display data successfully", async () => {
        act(() => { render(<Home />) })

        expect(fetch).toBeCalledTimes(1);
        expect(await screen.findAllByRole("listItem")).toHaveLength(mockUserList.results.length);
    })
});