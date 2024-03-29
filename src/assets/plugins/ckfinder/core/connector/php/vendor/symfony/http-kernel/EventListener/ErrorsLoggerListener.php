<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Symfony\Component\HttpKernel\EventListener;

@trigger_error('The ' . __NAMESPACE__ . '\ErrorsLoggerListener class is deprecated since version 2.6 and will be removed in 3.0. Use the Symfony\Component\HttpKernel\EventListener\DebugHandlersListener class instead.', E_USER_DEPRECATED);

use Psr\Log\LoggerInterface;
use Symfony\Component\Debug\ErrorHandler;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\KernelEvents;

/**
 * Injects the logger into the ErrorHandler, so that it can log various errors.
 *
 * @author Colin Frei <colin@colinfrei.com>
 * @author Konstantin Myakshin <koc-dp@yandex.ru>
 *
 * @deprecated since version 2.6, to be removed in 3.0. Use the DebugHandlersListener class instead.
 */
class ErrorsLoggerListener implements EventSubscriberInterface
{
  private $channel;
  private $logger;

  public function __construct($channel, LoggerInterface $logger = null)
  {
    $this->channel = $channel;
    $this->logger = $logger;
  }

  public function injectLogger()
  {
    if (null !== $this->logger) {
      ErrorHandler::setLogger($this->logger, $this->channel);
      $this->logger = null;
    }
  }

  public static function getSubscribedEvents()
  {
    return array(KernelEvents::REQUEST => array('injectLogger', 2048));
  }
}
