import React, { useState, useEffect, useRef } from "react";
import "./Hooks.css";
export default function Hooks() {
  const THRESHOLD = 15;
  const SlidingWindowScrollHook = (props) => {
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(THRESHOLD);
    const [observer, setObserver] = useState(null);
    // 其它代码...
    const $bottomElement = useRef();
    const $topElement = useRef();
  };
  useEffect(() => {
    // 定义观察
    intiateScrollObserver();
    return () => {
      // 放弃观察
      resetObservation();
    };
  }, [end]); //因为[end] 是同步刷新，这里用一个就行了。

  // 定义观察
  const intiateScrollObserver = () => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    const Observer = new IntersectionObserver(callback, options);
    // 分别观察开头和结尾的元素
    if ($topElement.current) {
      Observer.observe($topElement.current);
    }
    if ($bottomElement.current) {
      Observer.observe($bottomElement.current);
    }
    // 设初始值
    setObserver(Observer);
  };

  // 交叉观察的具体回调，观察每个节点，并对实时头尾元素索引处理
  const callback = (entries, observer) => {
    entries.forEach((entry, index) => {
      const listLength = props.list.length;
      // 向下滚动，刷新数据
      if (entry.isIntersecting && entry.target.id === "bottom") {
        const maxStartIndex = listLength - 1 - THRESHOLD; // 当前头部的索引
        const maxEndIndex = listLength - 1; // 当前尾部的索引
        const newEnd = end + 10 <= maxEndIndex ? end + 10 : maxEndIndex; // 下一轮增加尾部
        const newStart = end - 5 <= maxStartIndex ? end - 5 : maxStartIndex; // 在上一轮的基础上计算头部
        setStart(newStart);
        setEnd(newEnd);
      }
      // 向上滚动，刷新数据
      if (entry.isIntersecting && entry.target.id === "top") {
        const newEnd =
          end === THRESHOLD
            ? THRESHOLD
            : end - 10 > THRESHOLD
            ? end - 10
            : THRESHOLD; // 向上滚动尾部元素索引不得小于15
        let newStart = start === 0 ? 0 : start - 10 > 0 ? start - 10 : 0; // 头部元素索引最小值为0
        setStart(newStart);
        setEnd(newEnd);
      }
    });
  };

  // 停止滚动时放弃观察
  const resetObservation = () => {
    observer && observer.unobserve($bottomElement.current);
    observer && observer.unobserve($topElement.current);
  };

  // 渲染时，头尾ref处理
  const getReference = (index, isLastIndex) => {
    if (index === 0) return $topElement;
    if (isLastIndex) return $bottomElement;
    return null;
  };
  return <div></div>;
}
