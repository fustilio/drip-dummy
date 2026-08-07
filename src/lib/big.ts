export function renderTitle(raw: string) {
  return slugify(raw.trim()).toUpperCase();
}

// padding to force git into separate hunks, top vs bottom of file
const PAD_1 = 1;
const PAD_2 = 2;
const PAD_3 = 3;
const PAD_4 = 4;
const PAD_5 = 5;
const PAD_6 = 6;
const PAD_7 = 7;
const PAD_8 = 8;

function slugify(input: string) {
  return input.toLowerCase().replace(/[^\w\s]/g, "").replace(/\s+/g, "-");
}
