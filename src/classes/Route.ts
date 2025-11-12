export class Route {
  constructor(
    public readonly title: string,
    public readonly headerColor: string,
    public readonly steps: string[],
    public readonly doc?: string,
    public readonly monochrome?: boolean
  ) {}
}
