<?php

/**
 * LICENSE: Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * PHP version 5
 *
 * @category  Microsoft
 * @package   WindowsAzure\Common\Internal\Authentication
 * @author    Azure PHP SDK <azurephpsdk@microsoft.com>
 * @copyright Microsoft Corporation
 * @license   http://www.apache.org/licenses/LICENSE-2.0  Apache License 2.0
 * @link      https://github.com/windowsazure/azure-sdk-for-php
 */

namespace WindowsAzure\Common\Internal\Authentication;

/**
 * Interface for azure authentication schemes.
 *
 * @category  Microsoft
 * @package   WindowsAzure\Common\Internal\Authentication
 * @author    Azure PHP SDK <azurephpsdk@microsoft.com>
 * @copyright Microsoft Corporation
 * @license   http://www.apache.org/licenses/LICENSE-2.0  Apache License 2.0
 * @version   Release: 0.4.0_2014-01
 * @link      https://github.com/windowsazure/azure-sdk-for-php
 */
interface IAuthScheme
{
  /**
   * Returns authorization header to be included in the request.
   *
   * @param array $headers request headers.
   * @param string $url reuqest url.
   * @param array $queryParams query variables.
   * @param string $httpMethod request http method.
   *
   * @return string
   * @see Specifying the Authorization Header section at
   *      http://msdn.microsoft.com/en-us/library/windowsazure/dd179428.aspx
   *
   * @abstract
   *
   */
  public function getAuthorizationHeader($headers, $url, $queryParams,
                                         $httpMethod
  );
}


