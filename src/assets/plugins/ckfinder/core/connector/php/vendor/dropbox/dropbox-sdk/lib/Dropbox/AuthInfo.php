<?php

namespace Dropbox;

/**
 * This class contains methods to load an AppInfo and AccessToken from a JSON file.
 * This can help simplify simple scripts (such as the example programs that come with the
 * SDK) but is probably not useful in typical Dropbox API apps.
 *
 */
final class AuthInfo
{
  /**
   * Loads a JSON file containing authorization information for your app. 'php authorize.php'
   * in the examples directory for details about what this file should look like.
   *
   * @param string $path
   *    Path to a JSON file
   * @return array
   *    A `list(string $accessToken, Host $host)`.
   *
   * @throws AuthInfoLoadException
   */
  static function loadFromJsonFile($path)
  {
    if (!file_exists($path)) {
      throw new AuthInfoLoadException("File doesn't exist: \"$path\"");
    }

    $str = Util::stripUtf8Bom(file_get_contents($path));
    $jsonArr = json_decode($str, true, 10);

    if (is_null($jsonArr)) {
      throw new AuthInfoLoadException("JSON parse error: \"$path\"");
    }

    return self::loadFromJson($jsonArr);
  }

  /**
   * Parses a JSON object to build an AuthInfo object.  If you would like to load this from a file,
   * please use the @param array $jsonArr
   *    A parsed JSON object, typcally the result of json_decode(..., true).
   * @return array
   *    A `list(string $accessToken, Host $host)`.
   *
   * @throws AuthInfoLoadException
   * @see loadFromJsonFile method.
   *
   */
  private static function loadFromJson($jsonArr)
  {
    if (!is_array($jsonArr)) {
      throw new AuthInfoLoadException("Expecting JSON object, found something else");
    }

    // Check access_token
    if (!array_key_exists('access_token', $jsonArr)) {
      throw new AuthInfoLoadException("Missing field \"access_token\"");
    }

    $accessToken = $jsonArr['access_token'];
    if (!is_string($accessToken)) {
      throw new AuthInfoLoadException("Expecting field \"access_token\" to be a string");
    }

    try {
      $host = Host::loadFromJson($jsonArr);
    } catch (HostLoadException $ex) {
      throw new AuthInfoLoadException($ex->getMessage());
    }

    return array($accessToken, $host);
  }
}
