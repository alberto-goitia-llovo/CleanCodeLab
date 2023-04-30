export class HammingCalculator {
  getDistance(a: string, b: string): number {
    this.checkGuards(a, b);

    this.logInfo(`Calculating difference for ${a} - ${b}`);
    let result = this.calculateDistance(a, b);

    this.logInfo(`Calculated difference ${result}`);
    return result;
  }

  private checkGuards(a: string, b: string) {
    if (this.anyIsNull(a, b)) {
      this.throwError('null not allowed');
    }
    if (this.areInvalid(a, b)) {
      this.throwError('invalid strings');
    }
  }

  private calculateDistance(a: string, b: string): number {
    let result = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        result++;
      }
    }
    return result;
  }

  private areInvalid(a: string, b: string): boolean {
    return this.haveDifferentLength(a, b) || this.oneIsEmpty(a, b);
  }

  private oneIsEmpty(a: string, b: string): boolean {
    return this.anyIsEmpty(a, b) && !this.bothAreEmpty(a, b);
  }

  private bothAreEmpty(a: string, b: string): boolean {
    return a.length === 0 && b.length === 0;
  }

  private anyIsEmpty(a: string, b: string): boolean {
    return a.length === 0 || b.length === 0;
  }

  private anyIsNull(a: string, b: string): boolean {
    return a === null || b === null;
  }

  private haveDifferentLength(a: string, b: string): boolean {
    return a.length !== b.length;
  }

  private logInfo(message: string): void {
    console.log(message);
  }

  private throwError(message: string): void {
    console.error(message);
    throw new Error(message);
  }
}
