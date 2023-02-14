import { SearchPipe } from './search.pipe';




describe('SearchPipe', () => {
  let pipe: SearchPipe;
  let items: any[];

  beforeEach(() => {
    pipe = new SearchPipe();
    items = [{ id: 1, title: 'Item 1', body: 'Description 1' }, { id: 2, title: 'Item 2', body: 'Description 2' }, { id: 3, title: 'Item 3', body: 'Description 3' },];
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return all items if searchText is empty', () => {
    let searchText = '';
    let result = pipe.transform(items, searchText);
    expect(result).toEqual(items);
  });

  it('should return all items if searchText is less than 3 characters', () => {
    let searchText = 'ab';
    let result = pipe.transform(items, searchText);
    expect(result).toEqual(items);
  });

  it('should return filtered items if searchText is found in title or description', () => {
    let searchText = 'item 2';
    let result = pipe.transform(items, searchText);
    expect(result).toEqual([items[1]]);
  });

  it('should return empty array if searchText is not found in title or description', () => {
    let searchText = 'not found';
    let result = pipe.transform(items, searchText);
    expect(result).toEqual([]);
  });
});
