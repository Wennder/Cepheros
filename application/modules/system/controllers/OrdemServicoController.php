<?php
class System_OrdemServicoController extends Zend_Controller_Action{
	
	public $log;
	public $configs;
	public $cache;
	public $userInfo;
	
	public function init(){
	
		if(!Zend_Auth::getInstance()->hasIdentity())
		{
			$this->_redirect('/');
		}
		$this->log = Zend_Registry::get('log');
		$this->configs = Zend_Registry::get('configs');
		$this->cache = Zend_Registry::get('cache');
		$this->userInfo = Zend_Auth::getInstance()->getStorage()->read();
	
		if($this->configs->phpSettings->display_errors == 1){
			$this->view->DebugEnable = true;
		}
		$this->view->parameters = $this->_request->getParams();
	
	}
	
	
	public function indexAction(){
	
	
	}
	
	
	public function configsAction(){
		
		
		if ($this->_request->isPost()) {
				
			foreach($_POST as $key=>$value){
				if($key == 'EstoqueAlertPercent'){
					$value = str_replace(",", ".", $value );
				}
				System_Model_SysConfigs::updateConfig($key, $value);
			}
				
		}
	}
	
}