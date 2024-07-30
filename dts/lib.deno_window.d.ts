// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.

/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />
/// <reference lib="shared_globals" />
/// <reference lib="esnext" />

/** @category Web APIs */
declare interface WindowEventMap {
  "error": ErrorEvent;
  "unhandledrejection": PromiseRejectionEvent;
  "rejectionhandled": PromiseRejectionEvent;
}

/** @category Web APIs */
declare interface Window extends EventTarget {
  readonly window: Window & typeof globalThis;
  readonly self: Window & typeof globalThis;
  Location: typeof Location;
  location: Location;
}

/** @category Web APIs */
declare var Window: {
  readonly prototype: Window;
  new(): never;
};

/** @category Web APIs */
declare var window: Window & typeof globalThis;
/** @category Web APIs */
declare var self: Window & typeof globalThis;

// TODO(nayeemrmn): Move this to `extensions/web` where its implementation is.
// The types there must first be split into window, worker and global types.
/** The location (URL) of the object it is linked to. Changes done on it are
 * reflected on the object it relates to. Accessible via
 * `globalThis.location`.
 *
 * @category Web APIs
 */
declare interface Location {
  /** Returns a DOMStringList object listing the origins of the ancestor
   * browsing contexts, from the parent browsing context to the top-level
   * browsing context.
   *
   * Always empty. */
  readonly ancestorOrigins: DOMStringList;
  /** Returns the Location object's URL's fragment (includes leading "#" if
   * non-empty).
   *
   * Cannot be set. */
  hash: string;
  /** Returns the Location object's URL's host and port (if different from the
   * default port for the scheme).
   *
   * Cannot be set. */
  host: string;
  /** Returns the Location object's URL's host.
   *
   * Cannot be set. */
  hostname: string;
  /** Returns the Location object's URL.
   *
   * Cannot be set. */
  href: string;
  toString(): string;
  /** Returns the Location object's URL's origin. */
  readonly origin: string;
  /** Returns the Location object's URL's path.
   *
   * Cannot be set. */
  pathname: string;
  /** Returns the Location object's URL's port.
   *
   * Cannot be set. */
  port: string;
  /** Returns the Location object's URL's scheme.
   *
   * Cannot be set. */
  protocol: string;
  /** Returns the Location object's URL's query (includes leading "?" if
   * non-empty).
   *
   * Cannot be set. */
  search: string;
  /** Navigates to the given URL.
   *
   * Cannot be set. */
  assign(url: string): void;
  /** Reloads the current page. Disabled. */
  reload(): void;
  /** @deprecated */
  reload(forcedReload: boolean): void;
  /** Removes the current page from the session history and navigates to the
   * given URL. Disabled. */
  replace(url: string): void;
}

// TODO(nayeemrmn): Move this to `extensions/web` where its implementation is.
// The types there must first be split into window, worker and global types.
/** The location (URL) of the object it is linked to. Changes done on it are
 * reflected on the object it relates to. Accessible via
 * `globalThis.location`.
 *
 * @category Web APIs
 */
declare var Location: {
  readonly prototype: Location;
  new(): never;
};

// TODO(nayeemrmn): Move this to `extensions/web` where its implementation is.
// The types there must first be split into window, worker and global types.
/** @category Web APIs */
declare var location: Location;

/** @category Web APIs */
declare var name: string;
