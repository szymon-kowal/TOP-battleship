export function toBeNxNArray(received, N) {
    const pass =
      Array.isArray(received) &&
      received.length === N &&
      received.every(row => Array.isArray(row) && row.length === N);
    if (pass) {
        return {
            message: () => `Expected the array not to be ${N}x${N}`,
            pass: true,
        };
    } 
    return {
        message: () => `Expected the array to be ${N}x${N},
                        but it is ${received.length}x${received[0].length}`,
        pass: false,
    };
}
  
  

export default toBeNxNArray;