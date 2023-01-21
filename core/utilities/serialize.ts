const serialize = (data: any) => {
  return JSON.parse(JSON.stringify(data));
};

export default serialize;
