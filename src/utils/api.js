const typeFormSheet =
  "https://docs.google.com/spreadsheets/d/1DAWzBAXiQ7BMqdAqhI9oym9ni_vX_mW32HLWQh-MC2M/edit#gid=1978934474";

export const getData = async () => {
  try {
    const res = await fetch(
      "https://sheet.best/api/sheets/d2e7cfa3-21a7-47c7-a824-58fc018ba40f"
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
