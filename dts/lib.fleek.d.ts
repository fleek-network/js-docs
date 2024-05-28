/** Handle to blockstore content.
 * Utility for traversing the proof and reading blocks from the blockstore.
 * @property {Uint8Array} proof - Blake3 proof of the content
 * @property {number} length - Number of blocks in the content
 * @category Fleek APIs
 */
declare class ContentHandle {
  constructor(proof: Uint8Array);
  proof: Uint8Array;
  length: number;
  read(id: any): any;
}

/** @category Fleek APIs */
declare interface Fleek {
  /** Fetch some blake3 content
   * @param {Uint8Array} hash - Blake3 hash of content to fetch
   * @returns {Promise<bool>} True if the fetch was successful
   */
  fetch_blake3(hash: Uint8Array): Promise<boolean>;
  /** Load a blockstore handle to some blake3 content
   * @param {Uint8Array} hash - Blake3 hash of the content
   * @returns {Promise<ContentHandle>}
   */
  load_content(hash: Uint8Array): Promise<ContentHandle>;
  /** Fetch a clients FLK balance.
   * @param {Uint8Array} account - The balance to check
   * @returns {Promise<BigInt>} BigInt of the balance
   */
  query_client_flk_balance(account: Uint8Array): Promise<BigInt>;
  /** Fetch a clients bandwidth balance.
   * @param {Uint8Array} account - The balance to check
   * @returns {Promise<BigInt>} BigInt of the balance
   */
  query_client_bandwidth_balance(
    account: Uint8Array,
  ): Promise<BigInt>;
}

/** @category Fleek APIs */
declare var Fleek: Fleek;