import {SelectQueryBuilder} from "typeorm";
import {PaginateQuery} from "./pagination";

describe("Pagination helper", () => {
  it('should set query params', () => {
    //given
    const Query: SelectQueryBuilder<never> = {
      offset: jest.fn(),
      limit: jest.fn()
    } as unknown as SelectQueryBuilder<never>;

    //when
    PaginateQuery(Query, 3, 220);

    //then
    expect(Query.offset).toHaveBeenCalledWith(440);
    expect(Query.limit).toHaveBeenCalledWith(220);
  });
});