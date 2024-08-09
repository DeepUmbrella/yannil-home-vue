/**
 *
 * @param {number} duration  - duration in milliseconds
 * @param {Object<string, function>} callbackOption - callbackOption Object with callback functions
 * @param {function} callbackOption.beforeStart - callback function to execute before first step
 * @param {function} callbackOption.progressing - callback function to execute on each step if return true, the animation will stop
 * @param {function} callbackOption.afterEnd - callback function to execute on after last step
 * @param {number} from {number} - start value
 * @param {number} target {number} - end value
 * @returns
 *
 * @example
 * calculate(0, 100, 1000 ,{ progressing: (value) => {
   console.log(value)
 }}) // 0 - 100 in 1000ms
 */

export function calculateFromToTarget(
  duration: number,
  callbackOption?: {
    beforeStart?: (from: number | undefined) => void;
    progressing?: (value: number) => boolean | void;
    afterEnd?: (target: number | undefined) => void;
  },
  from?: number,
  target?: number,
) {
  const {
    beforeStart = () => {},
    progressing = () => {},
    afterEnd = () => {},
  } = callbackOption || {};

  if (typeof beforeStart !== 'function')
    throw new Error(
      '[beforeStart] callback must be a function in callbackOption ',
    );
  if (typeof progressing !== 'function')
    throw new Error(
      '[progressing] callback must be a function in callbackOption ',
    );
  if (typeof afterEnd !== 'function')
    throw new Error(
      '[afterEnd] callback must be a function in callbackOption ',
    );

  const start = Date.now();
  beforeStart(from);
  const step = () => {
    const now = Date.now();
    const progress = Math.min((now - start) / duration, 1);
    const value =
      arguments.length < 4 ? progress : from + (target - from) * progress;
    if (progressing(value)) {
      afterEnd(target);
      return;
    }
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      afterEnd(target);
    }
  };
  requestAnimationFrame(step);
}
