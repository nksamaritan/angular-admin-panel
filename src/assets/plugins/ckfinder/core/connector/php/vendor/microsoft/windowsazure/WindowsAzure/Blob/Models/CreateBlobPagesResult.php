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
 * @package   WindowsAzure\Blob\Models
 * @author    Azure PHP SDK <azurephpsdk@microsoft.com>
 * @copyright 2012 Microsoft Corporation
 * @license   http://www.apache.org/licenses/LICENSE-2.0  Apache License 2.0
 * @link      https://github.com/windowsazure/azure-sdk-for-php
 */

namespace WindowsAzure\Blob\Models;

use WindowsAzure\Common\Internal\Resources;
use WindowsAzure\Common\Internal\Validate;
use WindowsAzure\Common\Internal\Utilities;

/**
 * Holds result of calling create or clear blob pages
 *
 * @category  Microsoft
 * @package   WindowsAzure\Blob\Models
 * @author    Azure PHP SDK <azurephpsdk@microsoft.com>
 * @copyright 2012 Microsoft Corporation
 * @license   http://www.apache.org/licenses/LICENSE-2.0  Apache License 2.0
 * @version   Release: 0.4.0_2014-01
 * @link      https://github.com/windowsazure/azure-sdk-for-php
 */
class CreateBlobPagesResult
{
  /**
   * @var \DateTime
   */
  private $_lastModified;

  /**
   * @var string
   */
  private $_etag;

  /**
   * @var integer
   */
  private $_sequenceNumber;

  /**
   * @var string
   */
  private $_contentMD5;

  /**
   * Creates CreateBlobPagesResult object from $parsed response in array
   * representation
   *
   * @param array $headers HTTP response headers
   *
   * @return CreateBlobPagesResult
   */
  public static function create($headers)
  {
    $result = new CreateBlobPagesResult();
    $clean = array_change_key_case($headers);

    $date = $clean[Resources::LAST_MODIFIED];
    $date = Utilities::rfc1123ToDateTime($date);
    $result->setETag($clean[Resources::ETAG]);
    $result->setLastModified($date);
    $result->setContentMD5(
      Utilities::tryGetValue($clean, Resources::CONTENT_MD5)
    );
    $result->setSequenceNumber(
      intval(
        Utilities::tryGetValue($clean, Resources::X_MS_BLOB_SEQUENCE_NUMBER)
      )
    );

    return $result;
  }

  /**
   * Gets blob lastModified.
   *
   * @return \DateTime.
   */
  public function getLastModified()
  {
    return $this->_lastModified;
  }

  /**
   * Sets blob lastModified.
   *
   * @param \DateTime $lastModified value.
   *
   * @return none.
   */
  public function setLastModified($lastModified)
  {
    Validate::isDate($lastModified);
    $this->_lastModified = $lastModified;
  }

  /**
   * Gets blob etag.
   *
   * @return string.
   */
  public function getETag()
  {
    return $this->_etag;
  }

  /**
   * Sets blob etag.
   *
   * @param string $etag value.
   *
   * @return none.
   */
  public function setETag($etag)
  {
    Validate::isString($etag, 'etag');
    $this->_etag = $etag;
  }

  /**
   * Gets blob contentMD5.
   *
   * @return string.
   */
  public function getContentMD5()
  {
    return $this->_contentMD5;
  }

  /**
   * Sets blob contentMD5.
   *
   * @param string $contentMD5 value.
   *
   * @return none.
   */
  public function setContentMD5($contentMD5)
  {
    $this->_contentMD5 = $contentMD5;
  }

  /**
   * Gets blob sequenceNumber.
   *
   * @return int.
   */
  public function getSequenceNumber()
  {
    return $this->_sequenceNumber;
  }

  /**
   * Sets blob sequenceNumber.
   *
   * @param int $sequenceNumber value.
   *
   * @return none.
   */
  public function setSequenceNumber($sequenceNumber)
  {
    Validate::isInteger($sequenceNumber, 'sequenceNumber');
    $this->_sequenceNumber = $sequenceNumber;
  }
}


