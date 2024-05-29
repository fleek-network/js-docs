/**
  * Fleek namespace for interacting with the core node.
  * @category Fleek Node API
  */
declare namespace Fleek {
  /** Fetch some blake3 content
   * @param {Uint8Array} hash - Blake3 hash of content to fetch
   * @returns {Promise<bool>} True if the fetch was successful
   */
  function fetch_blake3(hash: Uint8Array): Promise<boolean>;
  /** Load a blockstore handle to some blake3 content
   * @param {Uint8Array} hash - Blake3 hash of the content
   * @returns {Promise<ContentHandle>}
   */
  function load_content(hash: Uint8Array): Promise<ContentHandle>;
  /** Fetch a clients FLK balance.
   * @param {Uint8Array} account - The balance to check
   * @returns {Promise<BigInt>} BigInt of the balance
   */
  function query_client_flk_balance(account: Uint8Array): Promise<BigInt>;
  /** Fetch a clients bandwidth balance.
   * @param {Uint8Array} account - The balance to check
   * @returns {Promise<BigInt>} BigInt of the balance
   */
  function query_client_bandwidth_balance(
    account: Uint8Array,
  ): Promise<BigInt>;

  /** Handle to blockstore content.
   * Utility for traversing the proof and reading blocks from the blockstore.
   * @property {Uint8Array} proof - Raw blake3 proof of the content
   * @property {number} length - Number of blocks in the content
   * @category Fleek Node API
   */
  class ContentHandle {
    constructor(proof: Uint8Array);
    proof: Uint8Array;
    length: number;
    /**
      * Read a given block index from the blockstore
      * @param {number} idx - Index of block to read
      * @returns {Promise<Uint8Array>}
      */
    read(idx: number): Promise<Uint8Array>;
  }
}
