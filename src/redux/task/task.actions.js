

export const up = name => ({
  type: "setTick",
  payload: name
});

export const restart =()=>({
  type:"restart"
})