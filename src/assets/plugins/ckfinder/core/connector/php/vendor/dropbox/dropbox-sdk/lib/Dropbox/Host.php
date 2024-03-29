<?php

namespace Dropbox;

/**
 * The Dropbox web API accesses three hosts; this structure holds the
 * names of those three hosts.  This is primarily for mocking things out
 * during testing.  Most of the time you won't have to deal with this class
 * directly, and even when you do, you'll just use the default
 * value: {@link Host::getDefault()}.
 *
 * @internal
 */
final class Host
{
  /**
   * Returns a Host object configured with the three standard Dropbox host: "api.dropbox.com",
   * "api-content.dropbox.com", and "www.dropbox.com"
   *
   * @return Host
   */
  static function getDefault()
  {
    if (!self::$defaultValue) {
      self::$defaultValue = new Host("api.dropboxapi.com", "content.dropboxapi.com", "www.dropbox.com");
    }
    return self::$defaultValue;
  }

  private static $defaultValue;

  /** @var string */
  private $api;
  /** @var string */
  private $content;
  /** @var string */
  private $web;

  /**
   * Constructor.
   *
   * @param string $api
   *     See {@link getApi()}
   * @param string $content
   *     See {@link getContent()}
   * @param string $web
   *     See {@link getWeb()}
   */
  function __construct($api, $content, $web)
  {
    $this->api = $api;
    $this->content = $content;
    $this->web = $web;
  }

  /**
   * Returns the host name of the main Dropbox API server.
   * The default is "api.dropbox.com".
   *
   * @return string
   */
  function getApi()
  {
    return $this->api;
  }

  /**
   * Returns the host name of the Dropbox API content server.
   * The default is "api-content.dropbox.com".
   *
   * @return string
   */
  function getContent()
  {
    return $this->content;
  }

  /**
   * Returns the host name of the Dropbox web server.  Used during user authorization.
   * The default is "www.dropbox.com".
   *
   * @return string
   */
  function getWeb()
  {
    return $this->web;
  }

  /**
   * Check that a function argument is of type `Host`.
   *
   * @internal
   */
  static function checkArg($argName, $argValue)
  {
    if (!($argValue instanceof self)) Checker::throwError($argName, $argValue, __CLASS__);
  }

  /**
   * Check that a function argument is either `null` or of type
   * `Host`.
   *
   * @internal
   */
  static function checkArgOrNull($argName, $argValue)
  {
    if ($argValue === null) return;
    if (!($argValue instanceof self)) Checker::throwError($argName, $argValue, __CLASS__);
  }

  /**
   * Loads a Host object from the 'auth_host' and 'host_suffix' fields of a JSON object.
   * If those fields aren't present, return `null`.
   *
   * @return Host|null
   *
   * @throws HostLoadException
   */
  static function loadFromJson($jsonObj)
  {
    // Check for the optional 'auth_host' and 'host_suffix' fields.
    $authHost = null;
    if (array_key_exists('auth_host', $jsonObj)) {
      $authHost = $jsonObj["auth_host"];
      if (!is_string($authHost)) {
        throw new HostLoadException("Optional field \"auth_host\" must be a string");
      }
    }
    $hostSuffix = null;
    if (array_key_exists('host_suffix', $jsonObj)) {
      $hostSuffix = $jsonObj["host_suffix"];
      if (!is_string($hostSuffix)) {
        throw new HostLoadException("Optional field \"host_suffix\" must be a string");
      }
    }

    if ($authHost === null && $hostSuffix === null) return null;

    if ($authHost === null) {
      throw new HostLoadException("Can't provide \"host_suffix\" without providing \"auth_host\".");
    }
    if ($hostSuffix === null) {
      throw new HostLoadException("Can't provide \"auth_host\" without providing \"host_suffix\".");
    }
    $api = "api" . $hostSuffix;
    $content = "content" . $hostSuffix;
    $web = $authHost;
    return new Host($api, $content, $web);
  }
}
