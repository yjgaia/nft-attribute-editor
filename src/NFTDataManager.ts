import NFTData from "./NFTData.js";

export default class NFTDataManager {
  private _data: NFTData;

  constructor(data: NFTData) {
    this._data = data;
  }

  public getData(): NFTData {
    return this._data;
  }
}
