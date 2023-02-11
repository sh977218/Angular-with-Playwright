export {};

declare global {
  namespace PlaywrightTest {
    interface Matchers<R> {
      toBeTrim(a: string): R;
    }
  }
}
