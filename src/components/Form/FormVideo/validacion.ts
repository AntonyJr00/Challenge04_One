export const valTitle = (value: string) => /^[A-Za-z\s]{3,}$/.test(value);

export const valLinkVideo = (value: string) => {
  const valor = value;

  const expStandard =
    /^https?:\/\/(www\.)?youtube\.com\/watch\?v=[\w-]+(&\S*)?$/;
  const expShort = /^https:\/\/youtu\.be\/[\w-]+(\?.*)?$/;

  if (expStandard.test(valor)) {
    return true;
  } else if (expShort.test(valor)) {
    return true;
  } else {
    return false;
  }
};

export const valLinkImg = (value: string) => {
  const valueImg = value;
  const expresion = /^https:\/\/.*\.(jpg|jpeg)$/;

  return expresion.test(valueImg);
};

export const valCategory = (value: string) => /^[a-zA-Z_-]+$/.test(value);

export const valDescription = (value: string) => /^.{1,300}$/.test(value);

export const valUser = (value: string) => /^[A-Za-z\s]{3,}$/.test(value);
